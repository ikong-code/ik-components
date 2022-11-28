import React, { useState } from "react"
import {
  GetStaticPathsContext,
  InferGetServerSidePropsType,
  GetStaticPropsContext,
} from "next"
import dynamic from "next/dynamic"
import { MDXProvider } from "@mdx-js/react"

type Props = InferGetServerSidePropsType<typeof getStaticProps>

const DemoBlock = ({ children }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="demo-block">
      {children.map((child: any) => {
        if (child.type === "pre") {
          return (
            <div key={child.key}>
              <div
                className="demo-block-button"
                onClick={() => setVisible(!visible)}
              >
                {!visible ? "显示代码" : "收起代码"}
              </div>
              {visible && child}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
}

const components = {
  DemoBlock,
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return {
    paths: [
      { params: { slug: ["login"] } },
      { params: { slug: ["user-selecter"] } },
    ],
    fallback: false, // SSG mode
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {
  const slug = params?.slug.join("/")

  return {
    props: {
      slug,
    },
  }
}

export default function Page({ slug }: Props) {
  const Content = dynamic(() => import(`packages/${slug}/docs/index.mdx`), {
    ssr: false,
  })

  return (
    <div>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
    </div>
  )
}
