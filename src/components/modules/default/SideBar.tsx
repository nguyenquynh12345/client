const SideBar = (data: any) => {
  return (
    <div>
      {' '}
      <div className="border rounded p-4 bg-white shadow-sm mt-4">
        <h2 className="text-primary mb-4">Tin đăng nổi bật</h2>
        <div className="list-group">
          {data.data.map((post: any, index: number) => (
            <div key={index} className="list-group-item d-flex align-items-center border-0 border-bottom pb-3">
              <img
                src={post.image}
                alt={post.title}
                className="img-thumbnail"
                style={{ width: '60px', height: '60px' }}
              />
              <div className="ms-3">
                <h6 className="text-danger mb-1">{post.title}</h6>
                <p className="text-success fw-bold mb-1">{post.price}</p>
                <p className="text-muted small mb-0">{post.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
