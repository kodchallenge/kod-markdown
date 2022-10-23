import React, { useEffect, useState } from 'react'
import ReactMarkdown, { Options } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface KodMarkdownBaseProps {
    /**String markdown format */
    markdown?: string | null,
    
    /**It reads from a remote url in text format and show it. */
    fromUrl?: string,
    
    /**Loading element to be displayed on the screen while reading the markdown from a remote url */
    loading?: React.ReactElement

    /**Default `Light` */
    theme?: "dark" | "light",
}

export type KodMarkdownProps = KodMarkdownBaseProps & Omit<Options, "children">

export const MarkdownCodeThemes = {
    OneDark: oneDark,
}

export const KodMarkdown = ({ ...props }: KodMarkdownProps) => {
    const { markdown: inlineMarkdown, fromUrl, theme, loading, ...options } = props
    const [markdown, setMarkdown] = useState<string | null | undefined>(inlineMarkdown)
    useEffect(() => {
        if(fromUrl) {
            fetch(fromUrl)
                .then(res => res.text())
                .then(text => {
                    setMarkdown(text)
                })

        }
    }, [])

    useEffect(() => {
        if(theme)
            document.documentElement.classList.add(theme =="dark" ? "km-dark" : "km-light")
    }, [theme])

    if(fromUrl && !markdown) {
        return loading ?? <React.Fragment />
    }

    return (
        <ReactMarkdown
            className='kod-md'
            remarkPlugins={[remarkGfm]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            //@ts-ignore
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={`${className??""} inline`} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
            {...options}
        >
            {markdown ?? ""}
        </ReactMarkdown>
    )
}