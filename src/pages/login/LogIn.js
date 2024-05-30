
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { TextField, Button } from '@mui/material';
import { setUser } from '../../service/user'
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const Login = () => {
    const dispatch = useDispatch()
    const [password, setPassword] = useState([])
    const navigate = useNavigate()
    const onSubmit = (data) => {
        dispatch(setUser(data, navigate))
    }
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false);
        navigate('/employees')
    };
    return <>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login </DialogTitle>
            <DialogContent>
                <TextField type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                />
                <br></br>
                <Button variant="outlined" onClick={() => { onSubmit(password) }}>Log In</Button>
            </DialogContent>
        </Dialog>
    </>
}
export default Login;