"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => `import React, { useState, useEffect } from 'react';
import { IndexBar, List } from 'antd-mobile';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ComponentConfig from '@@/dumi/config';
import DemosConfig from '@@/dumi/demos';

const demoskeys = Object.keys(DemosConfig);
const components = ComponentConfig['menus']['en-US']['/components'];
const styleInject = (): void => {
  const css =
    \`.mobile-display .adm-index-bar .adm-index-bar-sidebar .adm-index-bar-sidebar-row .adm-index-bar-sidebar-item{
      width: auto;
      padding: 5px 10px;
      height: auto;
      border-radius: 15px;
      background-color: #f2f2f2;
    }
    .mobile-display .adm-index-bar .adm-index-bar-sidebar .adm-index-bar-sidebar-row .adm-index-bar-sidebar-item-active{
      background-color: var(--adm-color-primary);
    }\`;
  if (typeof document === 'undefined') {
    return;
  }
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style') as any;
  style.type = 'text/css';
  head.appendChild(style);
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};
const getDemoPath = (path: string): string => {
  const keyArrs = path.split('/');
  const key = keyArrs[keyArrs.length - 1];
  if (DemosConfig[\`\${key}-demos\`]) {
    return \`\${key}-demos\`
  } else if (DemosConfig[\`\${key}-demo1\`]) {
    return \`\${key}-demo1\`
  }
  return ''
}
export default ({ }) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    styleInject();
  }, [])
  return (
    <div style={{ height: window.innerHeight,overflow: 'hidden' }} className="mobile-display">
      <div style={{
        width: window.innerWidth,
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '18px',
        backgroundColor: 'var(--adm-color-primary)'
      }}>
        <div style={{ flex: 1 }} onClick={() => {
          setUrl('')
        }}>{url && <span style={{marginLeft:'10px'}}> 返回</span>}</div>
        <div style={{ flex: 1 }}>Ant Mobile@5</div>
        <div style={{ flex: 1 }}></div>
      </div>
      <iframe hidden={!url} src={url} style={{
        width: window.innerWidth,
        height: \`\${window.innerHeight - 45}px\`,
        borderStyle: 'none',
      }} />
      <div style={{ height: window.innerHeight }} hidden={!!url}>
        <IndexBar>
          {components.map((group, index) => {
            const { title, children } = group
            return (
              <IndexBar.Panel
                index={title}
                title={title}
                key={title}
              >
                <List>
                  {children.map((item, index) => (
                    <List.Item key={item.title} onClick={() => setUrl(\`/~demos/\${getDemoPath(item.path)}\`)}>{item.title}</List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            )
          })}
        </IndexBar>
      </div>
    </div>
  )
}

`;

exports.default = _default;