
<script>
  export let user = '';
</script>

<div class="sidebar">
  <div class="sidebar-section">
    {#if user}
      <p>Logged in as {user}</p>
      <button>Logout</button>
    {:else}
      <button>Login</button>
    {/if}
  </div>
  
  <div class="sidebar-section">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/accounts">Accounts</a></li>
      <li><a href="/subscriptions">Subscriptions</a></li>
    </ul>
  </div>
  
  <div class="sidebar-section">
    <h3>Settings</h3>
    <ul>
      <li><a href="/settings/profile">Profile</a></li>
      <li><a href="/settings/preferences">Preferences</a></li>
      <li><a href="/settings/security">Security</a></li>
    </ul>
  </div>
</div>