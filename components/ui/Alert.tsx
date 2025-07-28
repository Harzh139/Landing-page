'use client'

import React from 'react'
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react'

interface AlertProps {
  children: React.ReactNode
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  onClose?: () => void
  className?: string
}

const Alert: React.FC<AlertProps> = ({
  children,
  type = 'info',
  title,
  onClose,
  className
}) => {
  const types = {
    info: {
      icon: Info,
      classes: 'bg-blue-50 border-blue-200 text-blue-800',
      iconClasses: 'text-blue-500'
    },
    success: {
      icon: CheckCircle,
      classes: 'bg-green-50 border-green-200 text-green-800',
      iconClasses: 'text-green-500'
    },
    warning: {
      icon: AlertCircle,
      classes: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      iconClasses: 'text-yellow-500'
    },
    error: {
      icon: XCircle,
      classes: 'bg-red-50 border-red-200 text-red-800',
      iconClasses: 'text-red-500'
    }
  }

  const { icon: Icon, classes, iconClasses } = types[type]

  return (
    <div className={`border rounded-xl p-4 ${classes} ${className || ''}`}>
      <div className="flex items-start">
        <Icon className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${iconClasses}`} />
        <div className="flex-1">
          {title && (
            <h3 className="font-semibold mb-1">{title}</h3>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 p-1 hover:bg-black/10 rounded transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Alert 