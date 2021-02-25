import React, {useEffect, useRef} from 'react';
import {GetStaticProps, InferGetStaticPropsType} from "next";
import useSWR, { mutate } from 'swr'
import {DELETE, GET} from "@/utils/request";
import {Button, message, Table, Tabs} from 'antd'
import {CASiNOS_COL} from "@/config";
import CasinosModal from '@/components/casinosModal'
import {modalRefInterface} from "@/components";

interface Interface {
}

const Index: React.FC<Interface> = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { data } = useSWR('blog/fund', GET, { initialData: props.posts })
    const casinosModal = useRef<modalRefInterface>(null);

    const edit = (record) => {
        casinosModal.current.open(record)
    }

    const del = (record) => {
        DELETE(`blog/fund/${record.id}`)
            .then(() => {
                message.success('删除成功')
                mutate('blog/fund')
            })
    }

    return (
        <div>
            <Button type={"primary"} onClick={() =>　casinosModal.current.open()}>添加</Button>
            <Table
                rowKey={'code'}
                columns={CASiNOS_COL(edit, del)}
                dataSource={data}
            />
            <CasinosModal ref={casinosModal} callBack={() => mutate('blog/fund')}/>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await GET('blog/fund')
    return {
        props: {
            data,
        },
    }
}

export default Index
