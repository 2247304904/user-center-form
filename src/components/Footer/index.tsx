import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'MahaKit出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'MahaKit',
          href: 'https://github.com/2247304904',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />MahaKit github</>,
          href: 'https://github.com/2247304904',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '基于Ant Design Pro',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
