import React from "react";
import {Divider} from "antd";

export const CASiNOS_COL = (edit, del) => [
    {
        dataIndex: 'code',
        title: '名称(代码)',
        render: (text, record) => {
            return <>
                <p>{record.name}</p>
                <p>{text}</p>
                </>
        }
    },
    {
        dataIndex: 'ave_price',
        title: '买入均价',
    },
    {
        dataIndex: 'share',
        title: '份额',
    },
    {
        dataIndex: 'principal',
        title: '本金(元)',
    },
    {
        dataIndex: 'holding_income_rate',
        title: '持有收益率(%)',
        render: (text) => {
            return (
                <span style={{color: text > 0 ? '#FF0000' : '#008000'}}>
                    {text}%
                </span>
            )
        }
    },
    {
        dataIndex: 'holding_income',
        title: '持有收益额',
        render: (text) => {
            return (
                <span style={{color: text > 0 ? '#FF0000' : '#008000'}}>
                    {text}
                </span>
            )
        }
    },
    {
        dataIndex: 'expect_worth',
        title: '今日预估净值',
    },
    {
        dataIndex: 'expect_growth',
        title: '今日涨幅',
        render: text => {
            return <span style={{color: text > 0 ? '#FF0000' : '#008000'}}>{text}%</span>
        }
    },
    {
        dataIndex: 'income',
        title: '今日收益(元)',
        render: (text) => {
            return (
                <span style={{color: text > 0 ? '#FF0000' : '#008000'}}>
                    {text}
                </span>
            )
        }
    },
    {
        dataIndex: 'expect_worth_date',
        title: '更新时间',
    },
    {
        dataIndex: '',
        title: '操作',
        render: (text, record) => {
            return (
                <>
                    <a onClick={() => edit(record)}>编辑</a>
                    <Divider type="vertical" />
                    <a onClick={() => del(record)}>删除</a>
                </>
            )
        }
    }
]