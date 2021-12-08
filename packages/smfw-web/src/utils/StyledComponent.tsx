import { styled } from '@material-ui/core';

function StyledComponent(component: any, makeStyles: any) {
    return styled(component)((options: any) => {
        const { theme } = options;
        return makeStyles(theme);
    });
}

export default StyledComponent;
