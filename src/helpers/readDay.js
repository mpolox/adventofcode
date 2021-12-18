
export const readDay = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const theText = await new Response(file).text()
      const data = theText.split(/\r\n|\n/);
      return {
          "day" : file.name,
          "data" : data
      }
    }
}
