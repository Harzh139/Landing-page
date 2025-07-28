'use client'

import React, { forwardRef, useState } from 'react'
import { ChevronDown, AlertCircle, CheckCircle } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string
  error?: string
  success?: boolean
  helperText?: string
  options: SelectOption[]
  placeholder?: string
  onChange?: (value: string) => void
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, success, helperText, options, placeholder, onChange, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')

    const handleSelect = (value: string) => {
      setSelectedValue(value)
      onChange?.(value)
      setIsOpen(false)
    }

    const selectedOption = options.find(option => option.value === selectedValue)

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-full px-4 py-3 rounded-xl border transition-all duration-300 text-left
              ${error 
                ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' 
                : success 
                ? 'border-green-300 bg-green-50 focus:border-green-500 focus:ring-green-500'
                : 'border-gray-300 bg-white focus:border-purple-500 focus:ring-purple-500'
              }
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              ${selectedOption ? 'text-gray-900' : 'text-gray-400'}
              ${className || ''}
            `}
          >
            <span className="block truncate">
              {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </span>
          </button>
          
          {/* Hidden select for form submission */}
          <select
            ref={ref}
            value={selectedValue}
            onChange={(e) => handleSelect(e.target.value)}
            className="sr-only"
            {...props}
          >
            <option value="">{placeholder || 'Select an option'}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Dropdown */}
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
          
          {/* Status Icons */}
          {error && (
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
          )}
          
          {success && !error && (
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
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

Select.displayName = 'Select'

export default Select 