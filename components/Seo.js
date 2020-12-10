import Head from 'next/head';


export default function Seo({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta property="description" content={description}></meta>
        </Head>
    )
}
Seo.defaultProps={
    title: "Gaming - Tus juegos favoritos",
    description: "Tus juegos favoritos para steam, playStation"
}
