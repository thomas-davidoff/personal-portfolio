import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { sidebarContext } from '../sidebar/SidebarContext';
import { drawerWidth } from '../sidebar/Sidebar';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MainContentContainer({ children }) {
  const theme = useTheme();
  const { sbIsOpen } = useContext(sidebarContext);

  return (
      <Main open={sbIsOpen}>
      <DrawerHeader />
      {children}
    </Main>
  );
}