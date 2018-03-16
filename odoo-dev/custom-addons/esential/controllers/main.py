import json
from openerp import http
from openerp.http import request


class Main(http.Controller):
    @http.route('/esential/all', type='http', auth='none', cors='*')
    def esential(self):
        records = request.env['esential.task'].sudo().search([])
        result = '<html><body><table><tr><td>'
        result += '</td></tr><tr><td>'.join(records.mapped('name'))
        result += '</td></tr></table></body></html>'
        return result

    
    @http.route('/esential/json', type='http', auth='none', cors='*')
    def esential_json(self,**kw):
        records = request.env['esential.task'].sudo().search([])
        component = []
        param = False
        for k in kw:
            param = (k,kw[k])
        print param
        for t in records:
            if t.read(['tested'])[0]['tested']:
                if param == False:
                    component.append(t.read()[0])
                elif str(t.read([param[0]])[0][param[0]]) == str(param[1]):
                    component.append(t.read()[0])
        return json.dumps(component)
        

    @http.route('/esential/shop/json', type='http', auth='none', cors='*')
    def shops_json(self,**kw):
        shops = request.env['esentials.task'].sudo().search([]).read()
        return json.dumps({'shops':shops})