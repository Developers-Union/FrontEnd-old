// function upload() {
//     const serverPath = 'https://localhost:9091/';
//     const LENGTH = 1024 * 1024 * 10;
//     var file = document.getElementsByName('file')[0].files[0];
//     var filename = document.getElementsByName('file')[0].files[0].name;
//     var totalSize = file.size;
//     var start = 0;
//     var end = start + LENGTH;
//     var fd = null;
//     var blob = null;
//     var xhr = null;
//     while (start < totalSize) {
//         fd = new FormData();
//         xhr = new XMLHttpRequest();
//         xhr.open('POST', serverPath+'/blog', false);
//         blob = file.slice(start, end);
//         fd.append('file_data', blob);
//         fd.append('filename', filename);
//         fd.append("file_size", totalSize);
//         xhr.send(fd);

//         start = end;
//         end = start + LENGTH;
//     }
// }
