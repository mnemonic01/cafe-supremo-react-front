<form onSubmit={this.sendMessage}>
      <input type='text'
        placeholder='Content to search for eg. What do you have on Coffee'
        className='search-content-input'
        value={this.state.message}
        onChange={ev => this.setState({ message: ev.target.value })}
      />
 </form>
