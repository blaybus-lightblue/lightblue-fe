'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/shadcn/button'
import { DefaultInput } from '@/components/layouts/common/default-input'
import { Checkbox } from '@/components/shadcn/checkbox'
import { User, Lock, Mail } from 'lucide-react'
import { Form, FormItem } from '@/components/shadcn/form'
import { AuthActions } from '@/apis/auth.actions'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'

const loginSchema = z.object({
  username: z.string().min(1, '사용자명을 입력해주세요'),
  password: z
    .string()
    .min(1, '비밀번호를 입력해주세요')
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
  rememberLogin: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { checkAuth } = useAuth()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '', rememberLogin: false },
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)

    try {
      const result = await AuthActions.login({
        username: data.username,
        password: data.password,
      })

      if (result.success) {
        checkAuth()
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const loginItem = [
    {
      name: 'naver',
      icon: '/icons/naver.svg',
      text: '네이버로 시작하기',
      className: 'bg-[#00C73C] text-white',
    },
    {
      name: 'google',
      icon: '/icons/google.svg',
      text: '구글로 시작하기',
      className: 'bg-white border-[#e8eef2] text-[#17191a]',
    },
    {
      name: 'email',
      icon: '/icons/mail.svg',
      text: '이메일로 시작하기',
      className: 'bg-[#e8eef2] text-[#17191a]',
    },
  ]

  return (
    <div className='h-full flex-1 bg-white flex items-center justify-center px-4'>
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center space-y-2 text-[#17191a]'>
          <h2 className='text-[48px] font-bold  leading-[60px]'>로그인</h2>
          <p className='text-[14px] leading-5'>
            예술가와 협업하여 함께 펼쳐보세요
          </p>
        </div>

        <Form form={form} onSubmit={onSubmit} className='space-y-6'>
          <FormItem
            name='username'
            label='사용자명'
            required
            rules={{ required: true }}>
            <DefaultInput
              type='text'
              placeholder='아이디를 입력해주세요'
              leftIcon={<User className='w-5 h-5' />}
            />
          </FormItem>

          <FormItem
            name='password'
            label='패스워드'
            required
            rules={{ required: true }}>
            <DefaultInput
              type='password'
              placeholder='비밀번호를 입력해주세요'
              leftIcon={<Lock className='w-5 h-5' />}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              isPassword
            />
          </FormItem>

          <div className='flex items-center justify-between'>
            <FormItem
              name='rememberLogin'
              className='flex flex-row items-center space-x-2 space-y-0'>
              <div className='flex items-center space-x-2'>
                <Checkbox className='w-4 h-4 border-2 border-[#006fff] data-[state=checked]:bg-[#006fff] data-[state=checked]:border-[#006fff]' />
                <span className='text-sm text-[#757b80] cursor-pointer select-none'>
                  로그인 상태 유지
                </span>
              </div>
            </FormItem>

            <Link
              href='/forgot-password'
              className='text-sm text-[#757b80] hover:text-[#006fff] transition-colors'>
              비밀번호 찾기
            </Link>
          </div>

          <Button
            type='submit'
            className=' cursor-pointer w-full h-14 bg-[#006fff] text-white text-md font-bold rounded-lg transition-all duration-200 shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed'
            disabled={isLoading}>
            로그인
          </Button>
        </Form>

        <div className='relative my-8'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-[#e8eef2]'></div>
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-4 bg-white text-[#8c9499]'>or</span>
          </div>
        </div>

        <div className='space-y-3'>
          {loginItem.map(item => (
            <Button
              key={item.name}
              type='button'
              variant='outline'
              className={`text-md font-bold relative w-full h-14 border-0 ${item.className} font-medium rounded-lg transition-all duration-200 flex items-center justify-center space-x-3`}>
              <Image
                src={item.icon}
                alt={item.name}
                width={18}
                height={18}
                className='absolute left-4'
              />
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
