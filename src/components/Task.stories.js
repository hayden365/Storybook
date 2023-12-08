import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};
/** export default
 * 우리가 문서화하고 있는 컴포넌트에 대해 알려주기 위해,
 * component와 title(스토리북 앱의 사이드바에서 컴포넌트를 참조하는 방법)들을
 * 포함하는 default export를 생성합니다.
 */

const Template = (args) => <Task {...args} />;
/**
 * 스토리는 주어진 상태안에서 렌더링된 요소(예를 들자면, prop가 포함된 컴포넌트)를 반환하는 함수입니다.
 */

export const Default = Template.bind({});
/** bind
 *  각각의 스토리가 고유한 속성을 갖지만 동일한 결과물을 사용하도록 할 수 있습니다.
 */

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
/**
 * 인수(arguments) 또는 간단히 줄여서 args를 사용하여
 * 스토리북을 다시 시작하지 않고도 Controls addon으로 컴포넌트를 실시간으로 수정할 수 있습니다.
 *  args의 값이 변하면 컴포넌트도 함께 변합니다.
 */

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
