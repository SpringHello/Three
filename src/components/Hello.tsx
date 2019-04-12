import * as React from "react";

import {Button, Switch} from 'antd';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => <h1>
    Hello from {props.compiler} and {props.framework}!
    <Button>safd</Button>
    <Switch defaultChecked/>
</h1>;

