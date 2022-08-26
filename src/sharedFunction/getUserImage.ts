export default async function getUserImage() {
  if (localStorage["userImage"]) {
    var base64 = localStorage["userImage"];
    const res: Response = await fetch(base64);
    const blob: Blob = await res.blob();
    return new File([blob], "userImage");
    // var base64Parts = base64.split(",");
    // var fileFormat = base64Parts[0].split(";")[1];
    // var fileContent = base64Parts[1];
    // var file = new File([fileContent], "file name here", { type: fileFormat });
    // return file;
  }
}
