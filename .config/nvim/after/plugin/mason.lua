
local status_ok, mason = pcall(require, "mason")
if not status_ok then
	return
end

local status_ok_, mason_lspconfig = pcall(require, "mason-lspconfig")
if not status_ok_ then
	return
end

local status_ok__, lspconfig = pcall(require, "lspconfig")
if not status_ok__ then
	return
end

local status_ok__, navic = pcall(require, "nvim-navic")
if not status_ok__ then
	return
end

mason.setup({
	ui = {
		border = "single",
	},
})

mason_lspconfig.setup()
mason_lspconfig.setup_handlers({
	function(server)
		lspconfig[server].setup({
			on_attach = function(client, bufnr)
				navic.attach(client, bufnr)
			end,
			settings = {
				Lua = {
					diagnostics = { globals = { "vim" } },
				},
			},
		})
	end,
})
