
const employees = [
  {
    id: 1,
    firstName: "Ravi",
    email: "ravi@gamil.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare report",
        description: "Monthly financial report",
        date: "2025-05-10",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client meeting",
        description: "Discuss project milestones",
        date: "2025-05-12",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Database backup",
        description: "Backup all production databases",
        date: "2025-05-15",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Code review",
        description: "Review pull requests for module A",
        date: "2025-05-14",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix bugs",
        description: "Resolve reported bugs from QA",
        date: "2025-05-13",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team sync",
        description: "Weekly team stand-up meeting",
        date: "2025-05-11",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Add latest changes to API docs",
        date: "2025-05-16",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Arjun",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Customer feedback",
        description: "Analyze customer feedback forms",
        date: "2025-05-10",
        category: "Customer Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Onboarding",
        description: "Help onboard new team member",
        date: "2025-05-09",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Training session",
        description: "Conduct training for new CRM",
        date: "2025-05-13",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        title: "Marketing strategy",
        description: "Draft plan for Q3 campaign",
        date: "2025-05-12",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Email campaign",
        description: "Launch promotional emails",
        date: "2025-05-14",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "SEO optimization",
        description: "Update keywords and meta tags",
        date: "2025-05-15",
        category: "SEO",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Blog post",
        description: "Write article on product updates",
        date: "2025-05-16",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social media analytics",
        description: "Review campaign performance",
        date: "2025-05-13",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Manoj",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "System maintenance",
        description: "Check server health and logs",
        date: "2025-05-11",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security audit",
        description: "Internal audit for data compliance",
        date: "2025-05-13",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy update",
        description: "Push v1.2 to production",
        date: "2025-05-12",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName:'Abuzar',
    email: "admin@example.com",
    password: "123"
  },
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  return {employees,admin};
}
