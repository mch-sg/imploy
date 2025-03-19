import React from 'react'
import Link from 'next/link'



export default function Footer() {
  return (
    <section style={{paddingTop: "0px"}}>
        <hr />
      <footer className='text-center items-center justify-center font-[family-name:var(--font-geist-sans)]'>

        <div className='py-12 text-zinc-500' style={{marginBottom: "0px"}} ><small>© Imploy by <Link className="font-medium text-theme hover:text-zinc-500" href="https://github.com/mch-sg" target="_blank">Magnus Hvidtfeldt</Link>. <br/>Made with love.</small></div>
      </footer>
    </section>
  )
}