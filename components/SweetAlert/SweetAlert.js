// import Swal from 'sweetalert2';

// const SweetAlert = {
//   success: (title, text) => {
//     Swal.fire({
//       icon: 'success',
//       title: title || 'Success',
//       text: text || 'Operation completed successfully!',
//       confirmButtonColor: '#3085d6',
//     });
//   },
//   error: (title, text) => {
//     Swal.fire({
//       icon: 'error',
//       title: title || 'Error',
//       text: text || 'Something went wrong!',
//       confirmButtonColor: '#d33',
//     });
//   },
//   warning: (title, text) => {
//     Swal.fire({
//       icon: 'warning',
//       title: title || 'Warning',
//       text: text || 'Please check your inputs.',
//       confirmButtonColor: '#f4d03f',
//     });
//   },
//   info: (title, text) => {
//     Swal.fire({
//       icon: 'info',
//       title: title || 'Information',
//       text: text || 'This is some information.',
//       confirmButtonColor: '#3085d6',
//     });
//   },
//   confirm: (title, text, callback) => {
//     Swal.fire({
//       title: title || 'Are you sure?',
//       text: text || 'You won’t be able to revert this!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, do it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         callback(); // Execute the callback if confirmed
//       }
//     });
//   },
// };

// export default SweetAlert;


import Swal from 'sweetalert2';


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

const SweetAlert = {
  success: (title, text) => {
    Toast.fire({
      icon: 'success',
      title: title || 'Success',
      text: text || 'Operation completed successfully!',
      confirmButtonColor: '#3085d6',
    });
  },
  error: (title, text) => {
    Toast.fire({
      icon: 'error',
      title: title || 'Error',
      text: text || 'Something went wrong!',
      confirmButtonColor: '#d33',
    });
  },
  warning: (title, text) => {
    Toast.fire({
      icon: 'warning',
      title: title || 'Warning',
      text: text || 'Please check your inputs.',
      confirmButtonColor: '#f4d03f',
    });
  },
  info: (title, text) => {
    Toast.fire({
      icon: 'info',
      title: title || 'Information',
      text: text || 'This is some information.',
      confirmButtonColor: '#3085d6',
    });
  },
  confirm: (title, text, callback) => {
    Toast.fire({
      title: title || 'Are you sure?',
      text: text || 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, do it!',
    }).then((result) => {
      if (result.isConfirmed) {
        callback(); // Execute the callback if confirmed
      }
    });
  },
  toast: (icon, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon || 'success', 
      title: title || 'Operation completed successfully!',
    });
  },
};

export default SweetAlert;
