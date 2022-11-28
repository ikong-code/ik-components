/// <reference types="react" />
import { GetStaticPathsContext, InferGetServerSidePropsType, GetStaticPropsContext } from "next";
type Props = InferGetServerSidePropsType<typeof getStaticProps>;
export declare function getStaticPaths(context: GetStaticPathsContext): Promise<{
    paths: {
        params: {
            slug: string[];
        };
    }[];
    fallback: boolean;
}>;
export declare function getStaticProps({ params, }: GetStaticPropsContext<{
    slug: string[];
}>): Promise<{
    props: {
        slug: string | undefined;
    };
}>;
export default function Page({ slug }: Props): JSX.Element;
export {};
