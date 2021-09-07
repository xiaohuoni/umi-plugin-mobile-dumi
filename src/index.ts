import type { IApi } from '@umijs/types';
import { join } from 'path';
import getDisplayContent from './getDisplayContent';

const DIR_NAME = 'plugin-mobile-display';
const winPath = function (path: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  if (isExtendedLengthPath) {
    return path;
  }

  return path.replace(/\\/g, '/');
}

export default (api: IApi) => {

  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: join(DIR_NAME, 'display.tsx'),
      content: getDisplayContent(),
    });
  });

  api.modifyRoutes((routes) => {
    routes.unshift({
      path: '/all-components',
      component: winPath(
        join(api.paths.absTmpPath || '', DIR_NAME, 'display.tsx'),
      ),
    })
    return routes;
  });

};
