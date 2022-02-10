import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { RoomProvider, useUpdateMyPresence, useOthers } from '@liveblocks/react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface IContainerProps {
  title?: string
  children: JSX.Element[] | JSX.Element
}

interface ICursorProps {
  color: string
  x: number
  y: number
}

function useWindowLiveCursors() {
  const updateMyPresence = useUpdateMyPresence()

  useEffect(() => {
    let scroll = {
      x: window.scrollX,
      y: window.scrollY,
    }

    let lastPosition: { x: any; y: any } | null = null

    function transformPosition(point: { x: any; y: any }) {
      return {
        x: point.x / window.innerWidth,
        y: point.y,
      }
    }

    function onPointerMove(event: { pageX: any; pageY: any }) {
      const position = {
        x: event.pageX,
        y: event.pageY,
      }
      lastPosition = position
      updateMyPresence({
        cursor: transformPosition(position),
      })
    }

    function onPointerLeave() {
      lastPosition = null
      updateMyPresence({ cursor: null })
    }

    function onDocumentScroll() {
      if (lastPosition) {
        const offsetX = window.scrollX - scroll.x
        const offsetY = window.scrollY - scroll.y
        const position = {
          x: lastPosition.x + offsetX,
          y: lastPosition.y + offsetY,
        }
        lastPosition = position
        updateMyPresence({
          cursor: transformPosition(position),
        })
      }
      scroll.x = window.scrollX
      scroll.y = window.scrollY
    }

    document.addEventListener('scroll', onDocumentScroll)
    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerleave', onPointerLeave)

    return () => {
      document.removeEventListener('scroll', onDocumentScroll)
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [updateMyPresence])

  const others = useOthers()

  return others
    .toArray()
    .filter((user) => user.presence?.cursor != null)
    .map(({ connectionId, presence, id, info }) => {
      return {
        x: presence?.cursor.x * window.innerWidth,
        y: presence?.cursor.y,
        connectionId,
        id,
        info,
        presence,
      }
    })
}

function Cursor({ color, x, y }: ICursorProps) {
  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'transform 0.5s cubic-bezier(.17,.93,.38,1)',
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      width="24"
      height="36"
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill={color}
      />
    </svg>
  )
}

const COLORS = ['#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777']

function Room() {
  const cursors = useWindowLiveCursors()
  return (
    <>
      {cursors.map(({ x, y, connectionId }) => (
        <Cursor
          key={connectionId}
          color={COLORS[connectionId % COLORS.length]}
          x={x}
          y={y}
        />
      ))}
    </>
  )
}

export default function Container(props: IContainerProps) {
  const { children } = props
  const router = useRouter()

  const meta = {
    title: 'Bookmarkr',
    description: `Social Bookmarking`,
    image: 'https://www.bookmarkr.link/banner.png',
    type: 'website',
  }

  return (
    <div className="container mx-auto max-w-3xl p-8">
      <RoomProvider id="example-window-live-cursors">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://www.bookmarkr.link${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://www.bookmarkr.link${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Bookmarkr" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <Navbar />
        <main className="flex flex-col justify-center">{children}</main>
        <Room />
        <Footer />
      </RoomProvider>
    </div>
  )
}
