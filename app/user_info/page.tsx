export default function Page() {
  return (
    <div>
      <h1 style={{marginBottom: '20px'}}>ユーザー情報登録ページ</h1>
      <form>
        <label>
          名字:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  )
}