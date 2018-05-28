import json
from odoo import models, fields, api
from openerp import http
from openerp.http import request


class Main(http.Controller):

    @http.route('/esential/json', type='http', auth='none', cors='*')
    def esential_json(self,**kw):
        records = request.env['esential.task'].sudo().search([])
        component = []
        param = False
        for k in kw:
            param = (k,kw[k])
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
        return json.dumps(shops)

    @http.route('/register/user', type='json', auth='none', cors='*')
    def user_register(self,**args):
        print args["user"]
        print args["user"]["email"]
        regi = request.env['esentials.users']
        users = request.env['esentials.users'].sudo().search([]).read()
        for item in users:
            print item["email"] 
            if len(args["user"]) == 2:
                if str(item["email"]) == str(args["user"]["email"]):
                    if str(item["password"]) == str(args["user"]["password"]):
                        return json.dumps(item)
                    else:
                        return json.dumps({"error":"contrasenya erronea"})
            if len(args["user"]) == 3:
                if str(item["email"]) == str(args["user"]["email"]):
                    return json.dumps({"error":"ya existe"})
        if len(args["user"]) == 2:
            return json.dumps({"error":"No existe"})
        if len(args["user"]) == 3:
            regi.register(args["user"]["name"],args["user"]["pasword"],args["user"]["email"])
            return json.dumps(args)
        return json.dumps({})
    
   