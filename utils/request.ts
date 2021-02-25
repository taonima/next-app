import {message} from "antd";

const request = (url: string, config: any) => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, config).then((res: any) => {
            if (!res.ok) {
                throw Error('');
            }
            return res.json();
        }).then((resJson: any) => {
            if (resJson.code === 0) {
                return resolve(resJson.data || {});
            } else {
                message.error(resJson.message);
                return reject();
            }
        }).catch((error: any) => {
            // 公共错误处理
            console.log(error)
        });
    })
};

export const GET = (url, params?) => {
    if (params) {
        url += Object.keys(params).reduce((accumulator, currentValue, index) => {
            return `${index !== 0 ? '&' : ''}${accumulator}${currentValue}=${params[currentValue]}`
        }, '?')
    }
    return request(url,{method: 'GET'})
}

export const POST = (url, params = {}) => {
    return request(url, {
        body: JSON.stringify(params),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    });
}

export const DELETE = (url, params?) => {
    if (params) {
        url += Object.keys(params).reduce((accumulator, currentValue, index) => {
            return `${index !== 0 ? '&' : ''}${accumulator}${currentValue}=${params[currentValue]}`
        }, '?')
    }
    return request(url,{method: 'DELETE'})
}

export const PUT = (url, params = {}) => {
    return request(url, {
        body: JSON.stringify(params),
        headers: {
            'content-type': 'application/json'
        },
        method: 'PUT'
    });
}

module.exports = {
    GET,
    POST,
    DELETE,
    PUT
}
