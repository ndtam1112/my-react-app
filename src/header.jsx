function Header(props) {
  const handleMenuTogle = () => {
    const menu = document.getElementById('menu')
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none'
  }

  const fileInput = document.getElementById('avatarUpload')
  const preview = document.getElementById('preview')

  fileInput.addEventListener('change', function () {
    const file = this.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = function (e) {
        preview.src = e.target.result
        preview.style.display = 'block'
      }
      reader.readAsDataURL(file)
    } else {
      preview.src = ''
      preview.style.display = 'none'
    }
  })
  return (
    <>
      <h1>{props.title}</h1>
      <button id="menuBtn" onClick={handleMenuTogle}>
        Danh mục
      </button>
      <ul id="menu" style={{ display: 'none' }}>
        <li>Trang chu</li>
        <li>San pham</li>
      </ul>
      <div
        id="box"
        draggable="true"
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
      ></div>

      <input type="file" id="avatarUpload" />
      <img
        src=""
        id="preview"
        style={{ maxWidth: '200px', display: 'none' }}
        alt=""
      />
    </>
  )
}

export default Header
