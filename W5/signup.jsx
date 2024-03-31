<div className="card border-0 rounded-4">
  <div className="card-body p-3 p-md-4 p-xl-5">
    <div className="row">
      <div className="col-12">
        <div className="mb-4">
          <h3>Sign up</h3>
        </div>
      </div>
    </div>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
      <div className="row gy-3 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="name"
              className="form-control"
              name="email"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="name@example.com"
              required
            />
            <label for="name" className="form-label">
              Name
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="name@example.com"
              required
            />
            <label for="email" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              required
            />
            <label for="password" className="form-label">
              Password
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              placeholder="Password"
              required
            />
            <label for="confirm" className="form-label">
              Confirm
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <p className="error-message">&nbsp;{error}</p>
</div>;
