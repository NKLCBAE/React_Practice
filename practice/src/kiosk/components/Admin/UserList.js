import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

function UserList(props) {
    const [platform, setPlatform] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [rows, setRows] = useState([]);
    const onClick = (e) => {
        props.setId(e.target.id);
        props.setComp("Info");

    }

    useEffect(() => {
        let platformList = JSON.parse(localStorage.getItem('userLogin'));
        setPlatform(platformList);
        setRows(platformList);
    }, []);

    const columns = [
        { field: 'userId', headerName: 'id', width: 150 },
        { field: 'cardNo', headerName: 'no', width: 150 },
        { field: 'name', headerName: 'name', width: 150 },
        { field: 'userAge', headerName: 'age', width: 150 },
        { field: 'userHeight', headerName: 'height', width: 150 },
        {
            field: 'detailButton', headerName: 'detail', sortable: false, width: 150,
            renderCell: (params) =>
                <button id={params.row.userId} onClick={onClick}>상세보기</button>

        },
    ];

    function escapeRegExp(value) {
        return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    const requestSearch = (searchValue) => {
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = platform.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };



    return (<div><h1>사용자 목록         <Link to={`/`}>
        <button>뒤로 가기</button>
    </Link></h1>
        <div style={{ height: 631, width: "100%" }}>
            <Box>
                <TextField
                    variant="standard"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value); requestSearch(e.target.value) }}
                    placeholder="Search..."
                    InputProps={{
                        startAdornment: <SearchIcon fontSize="small" color="action" />,
                        endAdornment: (
                            <IconButton
                                title="Clear"
                                aria-label="Clear"
                                size="small"
                                style={{ visibility: searchText ? 'visible' : 'hidden', borderRadius: "57%", paddingRight: "1px", margin: "0", fontSize: "1.25rem" }}
                                onClick={(e) => { setSearchText(''); setRows(platform) }}
                            >
                                <ClearIcon fontSize="small" color="action" />
                            </IconButton>
                        ),
                    }}
                    sx={{
                        width: { xs: 1, sm: 'auto' }, m: (theme) => theme.spacing(1, 0.5, 1.5),
                        '& .MuiSvgIcon-root': {
                            mr: 0.5,
                        },
                        '& .MuiInput-underline:before': {
                            borderBottom: 1,
                            borderColor: 'divider',
                        },
                    }}
                />
            </Box>
            <DataGrid
                disableColumnMenu
                rows={rows}
                columns={columns}
                rowsPerPageOptions={[5, 10, 100]}
            />
        </div>
    </div>
    )
}

export default UserList;