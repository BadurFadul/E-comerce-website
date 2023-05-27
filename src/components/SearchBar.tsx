import { AppBar, Button, IconButton, InputBase, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <InputBase
            placeholder="Search..."
            sx={{ flexGrow: 1, mr: 1 }}
          />
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Toolbar>
      </AppBar>
    );
  };

  export default SearchBar