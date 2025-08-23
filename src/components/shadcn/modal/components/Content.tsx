import { defaults, isFunction, noop } from 'lodash-es'
import {
  KeyboardEvent,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import ReactFocusLock from 'react-focus-lock'

import { Button } from '@/components/shadcn/button'
import { useModalContext } from '../contexts/modal'
import { useModalControl } from '../hooks/useModalControl'
import { IModalBaseConfig, ModalSize } from '../types'

const CONTAINER_SIZE: Record<ModalSize, string> = {
  lg: '1120px',
  md: '880px',
  sm: '520px',
}

export const FOCUSABLE_SELECTOR = `
  a[href]:not([tabindex='-1']),
  area[href]:not([tabindex='-1']),
  input:not([disabled]):not([tabindex='-1']),
  select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),
  [tabindex]:not([tabindex='-1']),
  [contentEditable=true]:not([tabindex='-1'])
`

export const Content = (props: PropsWithChildren<IModalBaseConfig>) => {
  const config = useModalContext()
  const {
    children,
    size,
    title,
    noAutoFocus,
    closeOnEscape,
    showCloseButton,
    closeOnDimmedClick,
    closeIcon,
  } = useMemo(() => defaults({}, props, config), [props, config])

  const ctrl = useModalControl()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current

    if (!content) {
      return
    }

    const keep = document.activeElement as HTMLElement

    if (!noAutoFocus) {
      const focusable = content.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)

      if (focusable && isFunction(focusable.focus)) {
        focusable.focus({ preventScroll: true })
      } else {
        content.focus({ preventScroll: true })
      }
    }

    return () => {
      if (keep && isFunction(keep.focus)) {
        keep.focus()
      }
    }
  }, [noAutoFocus])

  const contentClickRef = useRef(false)
  const contentTimeoutRef = useRef(0)

  const onContentMouseDown: MouseEventHandler = () => {
    clearTimeout(contentTimeoutRef.current)
    contentClickRef.current = true
  }

  const onContentMouseUp: MouseEventHandler = () => {
    contentTimeoutRef.current = window.setTimeout(() => {
      contentClickRef.current = false
    })
  }

  const onContentKeyDown = closeOnEscape
    ? (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
          e.stopPropagation()
          ctrl.close({ closedBy: 'escape', value: undefined })
        }
      }
    : noop

  let onWrapperClick: MouseEventHandler = noop

  if (closeOnDimmedClick) {
    onWrapperClick = e => {
      if (contentClickRef.current) {
        contentClickRef.current = false
      } else if (wrapperRef.current === e.target) {
        ctrl.close({ closedBy: 'dimmed' })
      }
    }
  }

  return (
    <ReactFocusLock autoFocus={false}>
      <div
        ref={wrapperRef}
        onClick={onWrapperClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'center',
          position: 'fixed',
          inset: 0,
          padding: '2rem 0',
          overflowY: 'scroll',
          overscrollBehavior: 'none',
          zIndex: 5000,
        }}>
        <div
          tabIndex={-1}
          role='dialog'
          className='_isf-modal'
          aria-labelledby={typeof title === 'string' ? title : ''}
          aria-modal='true'
          ref={contentRef}
          onKeyDown={onContentKeyDown}
          onMouseDown={onContentMouseDown}
          onMouseUp={onContentMouseUp}
          style={{
            width:
              CONTAINER_SIZE[size ?? 'sm'] ??
              (typeof size === 'number' ? `${size}px` : size),
            maxWidth: 'calc(100vw - ${16 * 2}px)',
            margin: 'auto 0',
            position: 'relative',

            backgroundColor: '#ffffff',
            boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            outline: 'none',
          }}>
          {children}

          {showCloseButton && (
            <Button
              className='_isf-modal-closebtn'
              onClick={() =>
                ctrl.close({ closedBy: 'closeButton', value: undefined })
              }
              style={{
                width: '22px',
                height: '22px',
                padding: 0,
                lineHeight: 1,
                position: 'absolute',
                top: '20px',
                right: '20px',
              }}>
              {closeIcon ?? (
                <svg
                  fill='rgba(0, 0, 0, 0.88)'
                  stroke='rgba(0, 0, 0, 0.88) '
                  strokeWidth='0.5'
                  viewBox='0 0 24 24'
                  height='1rem'
                  width='1rem'>
                  <path d='M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z' />
                </svg>
              )}
            </Button>
          )}
        </div>
      </div>
    </ReactFocusLock>
  )
}
