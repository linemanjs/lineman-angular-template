class BatmanApp extends Batman.App
  @set 'mission', 'fight crime'

  # Set the root route to ExamplesController#index.
  @root 'examples#index'

# Make BatmanApp available in the global namespace so it can be used
# as a namespace and bound to in views.
window.BatmanApp = BatmanApp
