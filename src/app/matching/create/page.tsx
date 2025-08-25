'use client'

import { useState } from 'react'
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/shadcn/label'
import { Textarea } from '@/components/shadcn/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card'
import { Badge } from '@/components/shadcn/badge'
import {
  ImageIcon,
  Plus,
  Upload,
  FileText,
  Link as LinkIcon,
} from 'lucide-react'

export default function ProjectCreatePage() {
  const [descriptionLength, setDescriptionLength] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionLength(e.target.value.length)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, 3))
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setSelectedFiles(prev => [...prev, ...newFiles])
    }
  }

  const removeUploadedFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const removeSelectedFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <main className='min-h-screen py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        {/* 헤더 */}
        <div className='text-center mb-8 bg-semantic-background-bg-2 h-[98px] max-h-[98px] flex items-center justify-center'>
          <h1 className='text-2xl text-semantic-text-text-1'>
            협업 프로젝트 생성
          </h1>
        </div>

        <form className='space-y-6'>
          {/* 모임 유형 */}
          <div className='space-y-2'>
            <Label
              htmlFor='meetingType'
              className='label-m text-semantic-text-text-1'>
              모임 유형 <span className='text-semantic-error-error'>*</span>
            </Label>
            <Input
              id='meetingType'
              placeholder='모임 유형을 입력하세요'
              className='h-12 border-divider-1 focus:border-semantic-brand-primary'
            />
          </div>

          {/* 프로젝트명 */}
          <div className='space-y-2'>
            <Label
              htmlFor='projectName'
              className='label-m text-semantic-text-text-1'>
              프로젝트명
            </Label>
            <Input
              id='projectName'
              placeholder='3~30글자로 적어주세요 예) 도난방지 앱'
              className='h-12 border-divider-1 focus:border-semantic-brand-primary'
              maxLength={30}
            />
          </div>

          {/* 프로젝트 유형 */}
          <div className='space-y-2'>
            <Label
              htmlFor='projectType'
              className='label-m text-semantic-text-text-1'>
              프로젝트 유형
            </Label>
            <Select>
              <SelectTrigger className='h-12 border-divider-1 focus:border-semantic-brand-primary'>
                <SelectValue placeholder='전시, 워크숍 등' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='exhibition'>전시</SelectItem>
                <SelectItem value='workshop'>워크숍</SelectItem>
                <SelectItem value='performance'>퍼포먼스</SelectItem>
                <SelectItem value='installation'>설치작업</SelectItem>
                <SelectItem value='digital'>디지털 아트</SelectItem>
                <SelectItem value='other'>기타</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 요구사항 입력 섹션 */}
          <div className='space-y-4'>
            <div>
              <h3 className='title2 text-semantic-text-text-1 mb-2'>
                요구사항 입력
              </h3>
              <p className='body-2 text-semantic-text-text-2'>
                필요한 예술 분야와 인원 수를 입력하세요.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label
                  htmlFor='artField1'
                  className='label-m text-semantic-text-text-1'>
                  필요한 예술 분야1
                </Label>
                <Select>
                  <SelectTrigger className='w-full h-12 border-divider-1 focus:border-semantic-brand-primary'>
                    <SelectValue placeholder='옵션 선택' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='painting'>회화</SelectItem>
                    <SelectItem value='sculpture'>조각</SelectItem>
                    <SelectItem value='photography'>사진</SelectItem>
                    <SelectItem value='video'>비디오</SelectItem>
                    <SelectItem value='music'>음악</SelectItem>
                    <SelectItem value='dance'>춤</SelectItem>
                    <SelectItem value='theater'>연극</SelectItem>
                    <SelectItem value='design'>디자인</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label
                  htmlFor='artField2'
                  className='label-m text-semantic-text-text-1'>
                  필요한 예술 분야2
                </Label>
                <Select>
                  <SelectTrigger className='w-full h-12 border-divider-1 focus:border-semantic-brand-primary'>
                    <SelectValue placeholder='옵션 선택' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='painting'>회화</SelectItem>
                    <SelectItem value='sculpture'>조각</SelectItem>
                    <SelectItem value='photography'>사진</SelectItem>
                    <SelectItem value='video'>비디오</SelectItem>
                    <SelectItem value='music'>음악</SelectItem>
                    <SelectItem value='dance'>춤</SelectItem>
                    <SelectItem value='theater'>연극</SelectItem>
                    <SelectItem value='design'>디자인</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='space-y-2'>
              <Label
                htmlFor='recruitmentCount'
                className='label-m text-semantic-text-text-1'>
                모집 인원
              </Label>
              <Input
                id='recruitmentCount'
                type='number'
                placeholder='숫자만 입력'
                className='h-12 border-divider-1 focus:border-semantic-brand-primary'
                min={1}
              />
            </div>
          </div>

          {/* 일정 및 예산 입력 섹션 */}
          <div className='space-y-4'>
            <div>
              <h3 className='title2 text-semantic-text-text-1 mb-2'>
                일정 및 예산 입력
              </h3>
              <p className='body-2 text-semantic-text-text-2'>
                프로젝트의 일정과 예산을 입력하세요.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label
                  htmlFor='startDate'
                  className='label-m text-semantic-text-text-1'>
                  프로젝트 시작일
                </Label>
                <Input
                  id='startDate'
                  type='date'
                  className='max-h-12 border-divider-1 focus:border-semantic-brand-primary'
                />
              </div>
              <div className='space-y-2'>
                <Label
                  htmlFor='duration'
                  className='label-m text-semantic-text-text-1'>
                  프로젝트 기간
                </Label>
                <Select>
                  <SelectTrigger className='w-full h-12 border-divider-1 focus:border-semantic-brand-primary'>
                    <SelectValue placeholder='옵션 선택' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='1month'>1개월</SelectItem>
                    <SelectItem value='2months'>2개월</SelectItem>
                    <SelectItem value='3months'>3개월</SelectItem>
                    <SelectItem value='6months'>6개월</SelectItem>
                    <SelectItem value='1year'>1년</SelectItem>
                    <SelectItem value='ongoing'>진행형</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label
                  htmlFor='activityArea'
                  className='label-m text-semantic-text-text-1'>
                  활동 지역
                </Label>
                <Select>
                  <SelectTrigger className='w-full h-12 border-divider-1 focus:border-semantic-brand-primary'>
                    <SelectValue placeholder='시 선택' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='seoul'>서울</SelectItem>
                    <SelectItem value='busan'>부산</SelectItem>
                    <SelectItem value='daegu'>대구</SelectItem>
                    <SelectItem value='incheon'>인천</SelectItem>
                    <SelectItem value='gwangju'>광주</SelectItem>
                    <SelectItem value='daejeon'>대전</SelectItem>
                    <SelectItem value='ulsan'>울산</SelectItem>
                    <SelectItem value='sejong'>세종</SelectItem>
                    <SelectItem value='online'>온라인</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label
                  htmlFor='budget'
                  className='label-m text-semantic-text-text-1'>
                  예상 예산
                </Label>
                <Input
                  id='budget'
                  type='number'
                  placeholder='만원 단위'
                  className='max-h-12 border-divider-1 focus:border-semantic-brand-primary'
                  min={0}
                />
              </div>
            </div>
          </div>

          {/* 참고자료 첨부 섹션 */}
          <div className='space-y-4'>
            <div>
              <h3 className='title2 text-semantic-text-text-1 mb-2'>
                참고자료 첨부
              </h3>
              <p className='body-2 text-semantic-text-text-2'>
                이미지를 업로드 하세요 *저작권에 위배되지 않는 이미지를
                업로드해주세요.
              </p>
            </div>

            <div className='space-y-4'>
              <Label className='label-m text-semantic-text-text-1'>
                첨부 파일 (최대 3개, 각 10MB 제한)
              </Label>
              <div className='grid grid-cols-3 gap-4'>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className='relative'>
                    <div className='w-full h-32 border-2 border-dashed border-divider-1 rounded-lg flex items-center justify-center bg-semantic-background-bg-1'>
                      <div className='text-center'>
                        <ImageIcon className='w-8 h-8 text-semantic-text-text-3 mx-auto mb-2' />
                        <p className='text-xs text-semantic-text-text-2 truncate'>
                          {file.name}
                        </p>
                      </div>
                    </div>
                    <button
                      type='button'
                      onClick={() => removeUploadedFile(index)}
                      className='absolute -top-2 -right-2 bg-semantic-error-error text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-semantic-error-error-hover'>
                      ×
                    </button>
                  </div>
                ))}
                {uploadedFiles.length < 3 && (
                  <label className='w-full h-32 border-2 border-dashed border-divider-1 rounded-lg flex items-center justify-center bg-semantic-background-bg-1 hover:bg-semantic-background-bg-3 cursor-pointer transition-colors'>
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleFileUpload}
                      className='hidden'
                      multiple
                    />
                    <div className='text-center'>
                      <Plus className='w-8 h-8 text-semantic-text-text-3 mx-auto mb-2' />
                      <p className='text-sm text-semantic-text-text-2'>
                        이미지 추가
                      </p>
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* 프로젝트 상세 설명 섹션 */}
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label
                htmlFor='description'
                className='label-m text-semantic-text-text-1'>
                상세 설명
              </Label>
              <div className='relative'>
                <Textarea
                  id='description'
                  placeholder='최소 100자, 최대 1,000자'
                  className='min-h-[120px] resize-none border-divider-1 focus:border-semantic-brand-primary'
                  maxLength={1000}
                  onChange={handleDescriptionChange}
                />
                <div className='absolute bottom-2 right-2 text-xs text-semantic-text-text-3'>
                  {descriptionLength}/1000자
                </div>
              </div>
            </div>
          </div>

          {/* 참고 자료 섹션 */}
          <div className='space-y-4'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label
                  htmlFor='referenceUrl'
                  className='label-m text-semantic-text-text-1'>
                  참고 자료(파일 또는 URL)*
                </Label>
                <Input
                  id='referenceUrl'
                  type='url'
                  placeholder='https://'
                  className='h-12 border-divider-1 focus:border-semantic-brand-primary'
                />
              </div>
              <div className='space-y-2'>
                <label className='flex items-center justify-center w-full h-12 border-2 border-dashed border-divider-1 rounded-lg bg-semantic-background-bg-1 hover:bg-semantic-background-bg-3 cursor-pointer transition-colors'>
                  <input
                    type='file'
                    onChange={handleFileSelect}
                    className='hidden'
                    multiple
                  />
                  <div className='flex items-center gap-2'>
                    <FileText className='w-5 h-5 text-semantic-text-text-3' />
                    <span className='text-sm text-semantic-text-text-2'>
                      파일 선택
                    </span>
                  </div>
                </label>
              </div>
              {selectedFiles.length > 0 && (
                <div className='space-y-2'>
                  <Label className='label-m text-semantic-text-text-1'>
                    선택된 파일
                  </Label>
                  <div className='space-y-2'>
                    {selectedFiles.map((file, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-between p-3 bg-semantic-background-bg-1 rounded-lg'>
                        <div className='flex items-center gap-2'>
                          <FileText className='w-4 h-4 text-semantic-text-text-3' />
                          <span className='text-sm text-semantic-text-text-1'>
                            {file.name}
                          </span>
                        </div>
                        <button
                          type='button'
                          onClick={() => removeSelectedFile(index)}
                          className='text-semantic-error-error hover:text-semantic-error-error-hover'>
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 하단 버튼 */}
          <div className='flex justify-center gap-4 pt-8'>
            <Button
              variant='outline'
              size='lg'
              className='px-8 py-3 border-divider-1 bg-primitive-color-neutral-300 text-white hover:bg-semantic-background-bg-3'>
              미리보기
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='px-8 py-3 border-divider-1 bg-semantic-text-text-2 text-white hover:bg-semantic-background-bg-3'>
              임시저장
            </Button>
            <Button
              size='lg'
              className='px-8 py-3 bg-semantic-cta-cta hover:bg-semantic-cta-cta-hover text-white'>
              완료
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
