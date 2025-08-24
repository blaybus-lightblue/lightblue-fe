'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import * as React from 'react'
import {
  Controller,
  ControllerProps,
  FieldErrors,
  FieldPath,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFormContext,
  UseFormReturn,
} from 'react-hook-form'

import { Label } from './label'

interface FormProps<T extends FieldValues> {
  id?: string
  form: UseFormReturn<T>
  className?: string
  onSubmit?: (values: T) => void | Promise<void>
  onError?: (errors: FieldErrors<T>) => void
}

const Form = <T extends FieldValues>({
  id,
  className,
  form,
  onSubmit,
  onError,
  children,
}: React.PropsWithChildren<FormProps<T>>) => {
  const handleSubmit: SubmitHandler<T> = data => {
    onSubmit?.(data)
  }
  return (
    <FormProvider<T> {...form}>
      <form
        id={id}
        className={cn('flex flex-col gap-4 text-left ', className)}
        onSubmit={form.handleSubmit(handleSubmit, onError)}>
        {children}
      </form>
    </FormProvider>
  )
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormControllerItem({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot='form-item'
        className={cn('grid gap-1 mb-0', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

const FormItem = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  className,
  label,
  children,
  required = false,
  ...props
}: React.PropsWithChildren<
  Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
    label?: string | React.ReactNode
    className?: string
    required?: boolean
  }
>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        {...props}
        render={options => {
          const { field, fieldState } = options
          const { error } = fieldState
          const slotProps = { ...field, 'data-error': error ? true : undefined }
          return (
            <FormControllerItem className={className}>
              {label && (
                <FormLabel required={required}>
                  {label}
                  {required && (
                    <span className='ml-[2px] text-body-02-sb text-red-500'>
                      *
                    </span>
                  )}
                </FormLabel>
              )}
              <Slot {...slotProps}>{children}</Slot>
              <FormMessage />
            </FormControllerItem>
          )
        }}
      />
    </FormFieldContext.Provider>
  )
}

function FormLabel({
  className,
  children,
  required,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & {
  required?: boolean
}) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot='form-label'
      data-error={!!error}
      className={cn(
        'label-s text-neutral-800 data-[error=true]:text-destructive',
        className
      )}
      htmlFor={formItemId}
      {...props}>
      {children}
    </Label>
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot='form-control'
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot='form-description'
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot='form-message'
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}>
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormControllerItem,
  FormDescription,
  FormMessage,
  FormField,
}
