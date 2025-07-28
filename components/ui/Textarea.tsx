'use client'

import React, { forwardRef } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  success?: boolean
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, success, helperText, leftIcon, rightIcon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-4 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <textarea
            ref={ref}
            className={`
              w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${error 
                ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' 
                : success 
                ? 'border-green-300 bg-green-50 focus:border-green-500 focus:ring-green-500'
                : 'border-gray-300 bg-white focus:border-purple-500 focus:ring-purple-500'
              }
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              placeholder:text-gray-400
              min-h-[120px]
              ${className || ''}
            `}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-4 text-gray-400">
              {rightIcon}
            </div>
          )}
          
          {/* Status Icons */}
          {error && (
            <div className="absolute right-3 top-4">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
          )}
          
          {success && !error && (
            <div className="absolute right-3 top-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          )}
        </div>
        
        {/* Helper Text */}
        {(error || helperText) && (
          <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea 