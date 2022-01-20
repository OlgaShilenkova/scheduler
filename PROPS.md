## PROPS

# Application

# Daylist

- days : Array
- value / was - day : String
- onChange / was - setDay : Funct

# DayListItem

- name : String
- spots : Num
- selected : Boolean
- setDay : Funct

# Apointment

- time:
- interview

# Header

- time : String

# Empty

- onAdd : Funct

# Show

- student: String eg. "Lydia Miller-Jones"
- interviewer: Object we can use the interview object that already exists in stories/index.js for this
- onEdit: Function to be called when the user clicks the Edit button
- onDelete: Function to be called when the user clicks the Delete button

# Confirm

- message: String eg. "Delete the appointment?"
- onConfirm: Function to be called when the user clicks the Confirm button
- onCancel: Function to be called when the user clicks the Cancel button

# Status

- message:String eg. "Deleting"

# Error

- message:String eg. "Could not delete appointment."
- onClose:Function to be called when the user clicks the Close button

# Form

As part of our Edit story, the Form component should take the following props:

- student: String
- interviewer: Number
- interviewers: Array
- onSave: Function
- onCancel: Function

As part of our Create story, the Form component should take the following props:

- interviewers: Array
- onSave: Function
- onCancel: Function

The Form component should track the following state:

- student: String
- interviewer: Number

The Form component should have the following actions:

- setStudent: Function
- setInterviewer: Function

# InterviewerList

- interviewers: Array
- onChange / was - setInterviewer : Funct
- value / was - interviewer : Number

# InterviewerListItem

- id : Num
- name : String
- avatar : Url
- selected : Boolean
- setInterviewer :Function
