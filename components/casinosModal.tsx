import React, {forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState} from 'react';
import {Form, Input, message, Modal} from "antd";
import {modalRefInterface} from './index.d'
import {POST, PUT} from "@/utils/request";

const FormItem = Form.Item;

const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
};

interface Interface {
    callBack: Function
}

const Index: ForwardRefRenderFunction<modalRefInterface, Interface> = (props, ref) => {
    const {callBack} = props;
    const [form] = Form.useForm();
    const [visible, setVisible] = useState<boolean>(false);
    const [formData, setFormData] = useState<any>({});

    useImperativeHandle(ref, () => ({
        open
    }))

    const open = (record:any = {}) => {
        form.setFieldsValue(record);
        setFormData(record);
        setVisible(true);
    }

    const close = () => {
        form.resetFields();
        setVisible(false);
    }

    const save = () => {
        form.validateFields().then((value => {
            if (formData.id) {
                PUT(`blog/fund/${formData.id}`, value)
                    .then(() => {
                        message.success('修改成功');
                        close()
                        callBack()
                    })
            } else {
                POST('blog/fund', value)
                    .then(() => {
                        message.success('新增成功');
                        close()
                        callBack()
                    })
            }
        }))
    }

    return (
        <Modal
            title={'配置'}
            visible={visible}
            onCancel={close}
            onOk={save}
            maskClosable={false}
        >
            <Form {...layout} form={form}>
                <FormItem
                    name={'code'}
                    label={'代码'}
                    rules={[{ required: true, message: '不能不填哦' }]}
                >
                    <Input disabled={formData.id}/>
                </FormItem>
                <FormItem
                    name={'ave_price'}
                    label={'成本价'}
                    rules={[{ required: true, message: '不能不填哦' }]}
                >
                    <Input/>
                </FormItem>
                <FormItem
                    name={'share'}
                    label={'份额'}
                    rules={[{ required: true, message: '不能不填哦' }]}
                >
                    <Input/>
                </FormItem>
            </Form>
        </Modal>
    );
}

export default forwardRef(Index)
