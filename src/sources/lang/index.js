import Cookies from 'universal-cookie';
import zh_CN from "./zh_CN"
import en_US from './en_US';

const cookies = new Cookies();

const userStatusModal = (key, language, ...params) => {
	const text = ({
        cn: zh_CN,
        en: en_US,
    }[language || getLanguage()] || zh_CN)?.[key];

    if (params?.length) {
        return params.reduce((acc, cur) => {
          return acc.replace(/%s/, cur);
        }, text);
    }

    return text;
};

export const getLanguage = () => cookies.get('lang', { path: '/' }) || 'cn';

export default {
	userStatusModal
};
