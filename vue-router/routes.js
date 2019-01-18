import Student from '../src/views/student.vue';
import Teacher from '../src/views/teacher.vue';
import App from '../src/views/app.vue';

export default[
    {
        path:'/',
        redirect:'/student'
    },
    {
        path:'/student',
        component:Student
    },
    {
        path:'/teacher',
        component:Teacher
    }
]