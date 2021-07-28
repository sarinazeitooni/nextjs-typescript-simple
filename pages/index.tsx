import React from 'react';
import Layout from '../components/Layout';
import style from './styles/index.module.scss';
const Index: React.FunctionComponent = () => {
    return (
        <Layout title="Home">
            <h1 className={style['test']}>Hello Next.js 👋</h1>
        </Layout>
    )
}
export default Index