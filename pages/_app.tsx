import type { AppProps /*, AppContext */ } from 'next/app'
import dynamic from 'next/dynamic';
import React from "react";
import {ConfigProvider, Menu} from "antd";
import Link from "next/link";
import styles from './index.less';
import './globa.less'
import 'react-splitter-layout/lib/index.css';
import zhCN from 'antd/lib/locale/zh_CN';

const SplitterLayout = dynamic<any>(import ('react-splitter-layout'),{ ssr: false});

function MyApp({ Component, pageProps }: AppProps) {


    return (

        <ConfigProvider locale={zhCN}>
            <div className={styles.myApp}>
                <SplitterLayout customClassName={styles.layout} secondaryInitialSize={220} primaryIndex={1} >
                    <div className={styles.layout_left}>
                        <img src="/head.jpg" width={100} height={100}/><br/>
                        <Menu
                            style={{ width: '100%'}}
                            defaultSelectedKeys={['1']}
                            mode={"inline"}
                        >
                            <Menu.Item key={1}>
                                <Link href={'/casinos'}>
                                    赌场
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={2}>
                                <Link href={'/blog'}>
                                    blog
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className={styles.layout_right}>
                        <Component {...pageProps} />
                    </div>
                </SplitterLayout>
            </div>
        </ConfigProvider>
    )
}

export default MyApp