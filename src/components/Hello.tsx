import * as React from "react";

import {Button} from 'antd';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!<Button>safd</Button></h1>;

