import React from 'react'
import Head from 'next/head'

interface TitleProps {
  children: string | React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <Head>
      <title>{children ? `${children} - ProtoChakra` : 'ProtoChakra'}</title>
      <link rel="icon" href="/logo.svg" />
      <script async src="https://cdn.panelbear.com/analytics.js?site=IdNbw8995gl"></script>
      <script>{`
          window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
          panelbear('config', { site: 'IdNbw8995gl' });
      `}</script>
    </Head>
  )
}

export default Title
