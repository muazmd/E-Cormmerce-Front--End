// import './navbar.scss'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import { Search, Settings } from '@material-ui/icons';
// import InputBase from '@material-ui/core/InputBase';
// import { Link } from 'react-router-dom';
// import { alpha, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     // grow: {
//     //   flexGrow: 1,
//     // },
//     // menuButton: {
//     //   marginRight: theme.spacing(2),
//     // },
//     // title: {
//     //   display: 'none',
//     //   [theme.breakpoints.up('sm')]: {
//     //     display: 'block',
//     //   },
//     // },
//     // search: {
//     //   position: 'relative',
//     //   borderRadius: theme.shape.borderRadius,
//     //   backgroundColor: alpha(theme.palette.common.white, 0.15),
//     //   '&:hover': {
//     //     backgroundColor: alpha(theme.palette.common.white, 0.25),
//     //   },
//     //   marginRight: theme.spacing(2),
//     //   marginLeft: 0,
//     //   width: '100%',
//     //   [theme.breakpoints.up('sm')]: {
//     //     marginLeft: theme.spacing(3),
//     //     width: 'auto',
//     //   },
//     // },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//     // sectionDesktop: {
//     //   display: 'none',
//     //   [theme.breakpoints.up('md')]: {
//     //     display: 'flex',
//     //   },
//     // },
//     // sectionMobile: {
//     //   display: 'flex',
//     //   [theme.breakpoints.up('md')]: {
//     //     display: 'none',
//     //   },
//     // },
//   }));

//  const NavBar = () => {
//      const user = false;
//      const classes = useStyles();
//     return (
//         <div className="navBar">
//             <div className="navBar-left"> 
//             <Link className="Link" to="/"> 
//             <span className="navBar-logo">MAPS</span>
//             </Link>
//             </div>

//             <div className="navBar-right">
                
//                     <span>Menu</span>
//                     <span>New Arrivals</span>
//                     <span>Special Offers</span>
//                     <span><ShoppingCartIcon/><span className='itemsCount'>2</span> </span>
//                     <span> 
//                     <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//                         <Search/> </span>

//                     <span className="navBar-usersettings"><AccountCircleIcon/> <ArrowDropDownIcon/> 
//                     <div className="navBar-info">
//                        <span>Settings <Settings/> </span>
//                         {user ? <span>logout <ExitToAppIcon/> </span> :  <span>sign in <AddCircleOutlineIcon/> </span>}
                      
//                     </div>
//                     </span>
                
//             </div>
            
//         </div>
//     )
// }
// export default NavBar;
