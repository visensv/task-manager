import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import TaskManager from './TaskManager';

const theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          wordBreak: 'break-all',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <TaskManager />
    </ThemeProvider>
  );
}

export default App;