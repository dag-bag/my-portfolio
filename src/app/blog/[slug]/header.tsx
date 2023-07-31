'use client'

import { Skeleton } from '@tszhong0411/ui'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import React from 'react'

import ViewCounter from '@/components/view-counter'

import CommentCounter from './comment-counter'

type HeaderProps = {
  date: string
  title: string
  slug: string
}

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

const Header = (props: HeaderProps) => {
  const { date, title, slug } = props
  const [formattedDate, setFormattedDate] = React.useState('')

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('MMMM DD, YYYY'))
  }, [date])

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const increment = async () => {
        await fetch('/api/views', {
          method: 'POST',
          body: JSON.stringify({
            slug,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      }

      increment()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div initial={animation.hide} animate={animation.show}>
      <div>
        {formattedDate ? (
          formattedDate
        ) : (
          <Skeleton className='h-6 w-32 rounded-md' />
        )}
      </div>
      <h1 className='mb-4 text-3xl font-bold'>{title}</h1>
      <div className='flex items-center gap-2'>
        <ViewCounter slug={slug} />
        <div>/</div>
        <CommentCounter />
      </div>
    </motion.div>
  )
}

export default Header
