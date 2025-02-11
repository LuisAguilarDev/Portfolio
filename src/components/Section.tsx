import { ReactElement } from 'react'

export default function Section({title,children,id}:Readonly<{title:string,children:ReactElement,id:string}>) {
    return (
        <section  className="Project_Container" id={id}>
            {title && <h2 className='Project_Title'>{title}</h2>}
            {children}
        </section>
    )
}
