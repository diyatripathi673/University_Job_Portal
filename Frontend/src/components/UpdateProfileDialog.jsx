import React from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "./ui/dialog"
import { Label } from './ui/label'
const UpdateProfileDialog = ({open , setOpen}) => {
  return (
    <div>
      <Dialog>
<DialogContent>
  <DialogHeader>
    <DialogTitle>Update Profilr</DialogTitle>
  </DialogHeader>
  <form>
    <div className='grid gap-4 py-4'>
    <Label htmlFor="name"> Name</Label>

    </div>
  </form>
</DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfileDialog
